# `checkAttachment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-attachment-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584314-584331](../../../../../../reference/runtime/sand-eval-runner.cjs#L584314-L584331) | `FunctionDeclaration` | não | `attachment` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584314-584331](../../../../../../reference/runtime/sand-eval-runner.cjs#L584314-L584331) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:584314

Chamadas escritas diretamente neste corpo: `.includes`, `bytes.subarray`, `decode5`, `imageMatches`, `kindOf`.

SHA-256 do trecho: `e7614495b969389f5eb3eb878ac3383079de96d8e689757963f5f11cb0b16bf4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
