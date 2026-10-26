# `availableDesktopExecutor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/desktop-executor.ts` · [README do módulo](../../../../../modules/core/ports/desktop-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:752094-752096](../../../../../../reference/runtime/host-main.cjs#L752094-L752096) | `FunctionDeclaration` | não | `port` |
| [evaluation:528831-528833](../../../../../../reference/runtime/sand-eval-runner.cjs#L528831-L528833) | `FunctionDeclaration` | não | `port` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752094-752096](../../../../../../reference/runtime/host-main.cjs#L752094-L752096) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528831-528833](../../../../../../reference/runtime/sand-eval-runner.cjs#L528831-L528833) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:752094

Chamadas escritas diretamente neste corpo: `port.isAvailable`.

SHA-256 do trecho: `98a25e5cfa11dfcf418052a86021f97be4c3444d566c1b09c173c2c75b21f242`.

### evaluation:528831

Chamadas escritas diretamente neste corpo: `port.isAvailable`.

SHA-256 do trecho: `98a25e5cfa11dfcf418052a86021f97be4c3444d566c1b09c173c2c75b21f242`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
