# `lookupFailedRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/atlassian-cloud-id.ts` · [README do módulo](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:579006-579012](../../../../../../reference/runtime/sand-eval-runner.cjs#L579006-L579012) | `FunctionDeclaration` | não | `toolName, failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579006-579012](../../../../../../reference/runtime/sand-eval-runner.cjs#L579006-L579012) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:579006

Chamadas escritas diretamente neste corpo: `atlassianCloudIdFill.refused`.

SHA-256 do trecho: `7447db86ef41e7fc2a1ae8a0b0bf0f982447c2994d7c12c512a4ecf0b4ab8665`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
