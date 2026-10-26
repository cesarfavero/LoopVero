# `isModelReadableStorePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/protected-path-guard.ts` · [README do módulo](../../../../../modules/host/box/protected-path-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679108-679113](../../../../../../reference/runtime/host-main.cjs#L679108-L679113) | `FunctionDeclaration` | não | `root, path33` |
| [evaluation:626973-626978](../../../../../../reference/runtime/sand-eval-runner.cjs#L626973-L626978) | `FunctionDeclaration` | não | `root, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679108-679113](../../../../../../reference/runtime/host-main.cjs#L679108-L679113) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:626973-626978](../../../../../../reference/runtime/sand-eval-runner.cjs#L626973-L626978) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:679108

Chamadas escritas diretamente neste corpo: `.split`, `MODEL_READABLE_STORE_TREES.has`, `segments.every`.

SHA-256 do trecho: `99a21605656dfb4f05c53dc252b46e039e4e8b1cba9da2ab5185738288c3acb5`.

### evaluation:626973

Chamadas escritas diretamente neste corpo: `.split`, `MODEL_READABLE_STORE_TREES.has`, `segments.every`.

SHA-256 do trecho: `08e8e171dbb225b27daf6c1fdc33b4d4675e57bf4f8b43ffd85078ce48caae14`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
