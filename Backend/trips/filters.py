import django_filters
from .models import Trip

class TripFilter(django_filters.FilterSet):
    # Filtra 'location' para País e Cidade 
    country = django_filters.CharFilter(field_name='location', lookup_expr='icontains')
    city = django_filters.CharFilter(field_name='location', lookup_expr='icontains')
    
    # Filtra pela tag de estilo ecotrip (ex.: "aqua", "trilha", etc)
    style = django_filters.CharFilter(method='filter_style')
    
    # Filtra pela tag de companheiro de viagem (ex.: "sozinho", "em família", etc)
    companion = django_filters.CharFilter(method='filter_companion')
    
    # Filtra pela faixa de preço utilizando os símbolos "$", "$$", etc.
    price_range = django_filters.CharFilter(method='filter_price_range')

    class Meta:
        model = Trip
        # Os filtros 'country' e 'city' são aplicados sobre o campo "location"
        fields = ['country', 'city']

    def filter_style(self, queryset, name, value):
        """
        Filtra trips que possuem tags com a categoria 'ecotrip_style'
        e cujo nome contenha o valor informado.
        """
        return queryset.filter(tags__category='ecotrip_style', tags__name__icontains=value)

    def filter_companion(self, queryset, name, value):
        """
        Filtra trips que possuem tags com a categoria 'ecotrip_companion'
        e cujo nome contenha o valor informado.
        """
        return queryset.filter(tags__category='ecotrip_companion', tags__name__icontains=value)

    def filter_price_range(self, queryset, name, value):
        """
        Converte o valor recebido para um intervalo de preço e filtra as trips.
        Por exemplo:
         - "$": preço menor que 50
         - "$$": preço entre 50 e 100
         - "$$$": preço entre 100 e 200
         - "$$$$": preço entre 200 e 300
         - "$$$$$": preço maior ou igual a 300
        Ajuste os intervalos conforme sua necessidade.
        """
        if value == '$':
            return queryset.filter(price__lt=50)
        elif value == '$$':
            return queryset.filter(price__gte=50, price__lt=100)
        elif value == '$$$':
            return queryset.filter(price__gte=100, price__lt=200)
        elif value == '$$$$':
            return queryset.filter(price__gte=200, price__lt=300)
        elif value == '$$$$$':
            return queryset.filter(price__gte=300)
        return queryset