# `hasChannelsToShow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/channels.ts` · [README do módulo](../../../../../modules/shared/channels/channels-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:474529-474532](../../../../../../reference/runtime/sand-eval-runner.cjs#L474529-L474532) | `FunctionDeclaration` | não | `manifests, connections` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474529-474532](../../../../../../reference/runtime/sand-eval-runner.cjs#L474529-L474532) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:474529

Chamadas escritas diretamente neste corpo: `manifests.some`.

SHA-256 do trecho: `1329cd62592f1fe8af0ba71a1b99380ef059d01a1513578c750bf4667c82ceeb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
