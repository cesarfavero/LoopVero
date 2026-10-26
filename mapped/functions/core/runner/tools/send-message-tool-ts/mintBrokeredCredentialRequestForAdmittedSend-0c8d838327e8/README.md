# `mintBrokeredCredentialRequestForAdmittedSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761222-761254](../../../../../../../reference/runtime/host-main.cjs#L761222-L761254) | `FunctionDeclaration` | sim | `deps, credential` |
| [evaluation:552037-552069](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552037-L552069) | `FunctionDeclaration` | sim | `deps, credential` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761222-761254](../../../../../../../reference/runtime/host-main.cjs#L761222-L761254) | 4 | 0 | 1 | 2 | 2 | 0 |
| [evaluation:552037-552069](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552037-L552069) | 4 | 0 | 1 | 2 | 2 | 0 |

### host:761222

Chamadas escritas diretamente neste corpo: `Date.now`, `credential.logins.map`, `deps.createBrokeredCredentialAccessRequest`, `describeAlreadyGranted`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `4c05582d930b52104362e72e498c340ed32dbb6075d4d67d6a1123f263bbed1e`.

### evaluation:552037

Chamadas escritas diretamente neste corpo: `Date.now`, `credential.logins.map`, `deps.createBrokeredCredentialAccessRequest`, `describeAlreadyGranted`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `4c05582d930b52104362e72e498c340ed32dbb6075d4d67d6a1123f263bbed1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
