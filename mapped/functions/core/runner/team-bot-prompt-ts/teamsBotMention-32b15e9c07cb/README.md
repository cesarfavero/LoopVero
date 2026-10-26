# `teamsBotMention`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/team-bot-prompt.ts` · [README do módulo](../../../../../modules/core/runner/team-bot-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538585-538588](../../../../../../reference/runtime/sand-eval-runner.cjs#L538585-L538588) | `FunctionDeclaration` | não | `teams` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538585-538588](../../../../../../reference/runtime/sand-eval-runner.cjs#L538585-L538588) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538585

Chamadas escritas diretamente neste corpo: `teams.botName.trim`.

SHA-256 do trecho: `af6eba7793fcc954c111eb2546ba1f48a9773ccdb7994f678852f2bbcf9987a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
