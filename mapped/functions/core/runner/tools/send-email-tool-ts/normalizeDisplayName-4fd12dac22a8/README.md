# `normalizeDisplayName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764323-764333](../../../../../../../reference/runtime/host-main.cjs#L764323-L764333) | `FunctionDeclaration` | não | `raw, field` |
| [evaluation:557691-557701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557691-L557701) | `FunctionDeclaration` | não | `raw, field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764323-764333](../../../../../../../reference/runtime/host-main.cjs#L764323-L764333) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:557691-557701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557691-L557701) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:764323

Chamadas escritas diretamente neste corpo: `mailboxDisplayNameError`, `new SandToolInputError`, `raw.trim`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `fa29adeb91d5b4c6c5c1a28077f043d00571d08b848ab11f6e4e1b6d70e8e191`.

### evaluation:557691

Chamadas escritas diretamente neste corpo: `mailboxDisplayNameError`, `new SandToolInputError`, `raw.trim`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `4cc8726f8063c9706bffb42fc2240a086523cfc25d2d516e3f7e02d2ddf3b2e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
