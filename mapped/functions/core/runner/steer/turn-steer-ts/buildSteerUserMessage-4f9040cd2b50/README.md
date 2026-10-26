# `buildSteerUserMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/steer/turn-steer.ts` · [README do módulo](../../../../../../modules/core/runner/steer/turn-steer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589768-589773](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589768-L589773) | `FunctionDeclaration` | não | `prompt, options2, isRenamedSpelling` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589768-589773](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589768-L589773) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:589768

Chamadas escritas diretamente neste corpo: `crypto.randomUUID`, `hiddenPromptMarker`, `new UserMessage`.

SHA-256 do trecho: `1393674a5879715347c7d3eb95cab8bf49feb2b1151c6bc84c8fed6f5aa286c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
