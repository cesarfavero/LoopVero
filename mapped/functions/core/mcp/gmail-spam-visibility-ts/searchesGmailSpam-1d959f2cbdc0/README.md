# `searchesGmailSpam`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-spam-visibility.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584203-584205](../../../../../../reference/runtime/sand-eval-runner.cjs#L584203-L584205) | `FunctionDeclaration` | não | `query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584203-584205](../../../../../../reference/runtime/sand-eval-runner.cjs#L584203-L584205) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584203

Chamadas escritas diretamente neste corpo: `SPAM_SCOPE.test`.

SHA-256 do trecho: `cbdde527d6a106381b65cb375e25006635cd99770086ae0c1d6efec97aa7d4f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
