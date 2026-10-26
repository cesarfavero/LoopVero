# `dedupe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:574045-574052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574045-L574052) | `FunctionDeclaration` | não | `refs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574045-574052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574045-L574052) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:574045

Chamadas escritas diretamente neste corpo: `byKey.get`, `byKey.set`, `byKey.values`, `new Map`, `preferConnectorDocRef`.

SHA-256 do trecho: `cfc4480a9a549f8131296a91d4106e9a0ac30a6d5f1e52778c5543a6aff73098`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
