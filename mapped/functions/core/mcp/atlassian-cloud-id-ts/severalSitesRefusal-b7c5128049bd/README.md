# `severalSitesRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/atlassian-cloud-id.ts` · [README do módulo](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:578999-579005](../../../../../../reference/runtime/sand-eval-runner.cjs#L578999-L579005) | `FunctionDeclaration` | não | `toolName, sites` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:578999-579005](../../../../../../reference/runtime/sand-eval-runner.cjs#L578999-L579005) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:578999

Chamadas escritas diretamente neste corpo: `atlassianCloudIdFill.refused`.

SHA-256 do trecho: `62f9f45f0883c86a420d83c186f67d873ce7f5b6e45458ea29bb0c91833a2cfc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
