# `describeFinanceAlreadyConnected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/authenticate-result-notes.ts` · [README do módulo](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779369-779375](../../../../../../reference/runtime/host-main.cjs#L779369-L779375) | `FunctionDeclaration` | não | `args` |
| [evaluation:579543-579549](../../../../../../reference/runtime/sand-eval-runner.cjs#L579543-L579549) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779369-779375](../../../../../../reference/runtime/host-main.cjs#L779369-L779375) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579543-579549](../../../../../../reference/runtime/sand-eval-runner.cjs#L579543-L579549) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779369

Chamadas escritas diretamente neste corpo: `cardShownNote`, `financeAddAccountHint`, `request5.connectCardFollowUp`.

SHA-256 do trecho: `150f1de5632a984122d9b5568be3f985d4d5c95fd97864d705ff44be96c34cb4`.

### evaluation:579543

Chamadas escritas diretamente neste corpo: `cardShownNote`, `financeAddAccountHint`, `request3.connectCardFollowUp`.

SHA-256 do trecho: `9e8e583bf66dd355ce0c3513b7f1ff7435ed8261e9aa50519d010c6eca577e8c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
