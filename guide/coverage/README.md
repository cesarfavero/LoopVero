# Coverage and validation

## Escopo material

O manifesto preserva **1.070 arquivos originais**, com os mesmos bytes, tamanhos e modos Git do snapshot `655acca99bff0d17466547611108f94ed6a8a5e7`. A estrutura foi reorganizada em `reference/`. Dois arquivos de metadados do Finder e um placeholder vazio foram omitidos.

O aplicativo reconstruído, seus componentes de interface, testes, estilos, recursos e manifestos de produto foram removidos da árvore atual. A história Git permanece como referência anterior; não houve reescrita de commits.

## Análise estática detalhada

| Artefato central | Tamanho | Linhas LF | Papel |
| --- | ---: | ---: | --- |
| Host | 30.340.895 bytes | 787.382 | Gateway, proxy, extensões e estado |
| Executor de avaliação | 23.930.881 bytes | 631.084 | Implementações de loop, sessão, ferramentas e subagentes |
| Worker de estado | 783.772 bytes | Consulte o inventário | Persistência e protocolo de worker |

Os números e hashes reproduzíveis estão em [analysis.json](../../mapped/inventory/analysis.json). O catálogo seleciona **1.466 módulos**, **19.741 ocorrências de funções nomeadas** e **14.935 grupos por módulo/nome qualificado**, cada um com README próprio. Há também um README para cada módulo.

Os comentários de origem e a AST preservam o vínculo exato entre símbolo, bundle e linhas. A leitura manual aprofunda **25 componentes** e **36 funções centrais**. As fichas automáticas são uma camada de navegação completa para o recorte selecionado, não a afirmação de que milhares de funções tiveram sua semântica individual validada manualmente.

## O que foi verificado

- Correspondência dos blobs originais por tamanho e Git SHA-1 no manifesto.
- SHA-256 e número de linhas dos três bundles centrais usados na análise AST.
- Presença dos READMEs gerados e coerência de seus índices.
- Links relativos da documentação e intervalos de linhas nas fontes centrais.
- Separação entre host, executor de avaliação, worker e fronteiras remotas.
- Coerência dos achados principais por revisão independente de código e guia.

O script [verify-reference.py](../../tools/research/verify-reference.py) reproduz as verificações locais. Em uma cópia parcial, `--available` declara explicitamente quantos originais foram verificados e quantos não foram baixados. O manifesto integral pode ser confrontado com a árvore Git remota, sem abrir ou executar os arquivos binários.

## O que não foi afirmado

Não houve execução dos bundles, chamada de inferência original, login em serviços, observação de produção ou reconstrução do backend. O acervo não inclui a implementação completa do seletor inicial de oportunidades nem comprova a orquestração remota de Dream. As referências reorganizadas são evidência estática e não uma distribuição instalável do programa.

[Método e limites](../methodology/README.md) · [Conclusões](../findings/README.md) · [Guia](../README.md)
