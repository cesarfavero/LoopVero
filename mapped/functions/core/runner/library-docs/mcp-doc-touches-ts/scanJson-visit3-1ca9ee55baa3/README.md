# `scanJson/visit3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:573978-574006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573978-L574006) | `ArrowFunctionExpression` | não | `value, depth, role` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573978-574006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573978-L574006) | 12 | 4 | 0 | 3 | 0 | 0 |

### evaluation:573978

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Object.entries`, `PARENT_KEY_RE.test`, `URL_KEY_RE.test`, `childRole`, `isDocumentShaped`, `jsonObjectOf2`, `keyedStrings`, `own3.push`, `resolver.id`, `resolver.url`, `scan2.looseTitles.push`, `scan2.refs.push`, `scan2.titles.has`, `scan2.titles.set`, `titleOfObject`, `visit3`.

Alvos de atribuição ou incremento: `nodes`.

SHA-256 do trecho: `4019ca81d723434d0c97688b2e7903068e63984833f71812d083cdab3becc705`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
