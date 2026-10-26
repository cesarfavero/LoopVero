# `scoreTemplate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770778-770787](../../../../../../../../reference/runtime/host-main.cjs#L770778-L770787) | `FunctionDeclaration` | não | `template, terms` |
| [evaluation:569873-569882](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569873-L569882) | `FunctionDeclaration` | não | `template, terms` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770778-770787](../../../../../../../../reference/runtime/host-main.cjs#L770778-L770787) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:569873-569882](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569873-L569882) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:770778

Chamadas escritas diretamente neste corpo: `.join`, `.toLowerCase`, `body.includes`, `name18.includes`, `template.name.toLowerCase`.

Alvos de atribuição ou incremento: `score`.

SHA-256 do trecho: `52c147ea0b5cabc1f3ee585b85fa22af5f1875baa08172874cbed8c2f387b668`.

### evaluation:569873

Chamadas escritas diretamente neste corpo: `.join`, `.toLowerCase`, `body.includes`, `name18.includes`, `template.name.toLowerCase`.

Alvos de atribuição ou incremento: `score`.

SHA-256 do trecho: `52c147ea0b5cabc1f3ee585b85fa22af5f1875baa08172874cbed8c2f387b668`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
