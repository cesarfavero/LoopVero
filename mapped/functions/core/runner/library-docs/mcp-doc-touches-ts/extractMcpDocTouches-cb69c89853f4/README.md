# `extractMcpDocTouches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:574087-574109](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574087-L574109) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574087-574109](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574087-L574109) | 9 | 0 | 0 | 4 | 0 | 0 |

### evaluation:574087

Chamadas escritas diretamente neste corpo: `.map`, `dedupe`, `docSourceFor`, `emptyScan`, `fromArgs.refs.map`, `new Set`, `ofKind`, `resultRefs.filter`, `scanJson`, `scanResult`, `soleRef`, `source.argRefs`, `targets.slice`.

SHA-256 do trecho: `64ec1e18b76b631260e28a5cd563a12c3d2ff20c055b300a8eb142b251fde686`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
