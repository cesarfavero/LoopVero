# `isGmailIdFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-id-not-found.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584499-584501](../../../../../../reference/runtime/sand-eval-runner.cjs#L584499-L584501) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584499-584501](../../../../../../reference/runtime/sand-eval-runner.cjs#L584499-L584501) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584499

Chamadas escritas diretamente neste corpo: `ID_FAILURE.test`, `LABEL_FAILURE.test`.

SHA-256 do trecho: `fb378adeaaec6f3fd1deef3aa53ad19dc957b08de653eb9e4fde1975c1c5d7ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
