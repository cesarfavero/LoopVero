# `hashPromptPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546470-546484](../../../../../../reference/runtime/sand-eval-runner.cjs#L546470-L546484) | `FunctionDeclaration` | não | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546470-546484](../../../../../../reference/runtime/sand-eval-runner.cjs#L546470-L546484) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546470

Chamadas escritas diretamente neste corpo: `.includes`, `.join`, `.map`, `dynamicToolNamesOf`, `messageText`, `request3.messages.find`, `sha256HexOfText`, `shaOfMessage`, `tools.map`.

SHA-256 do trecho: `88949a5720fbf7fbb0174bf9e5f093343a1e43e9461b66bd7a777fb1f91bc298`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
