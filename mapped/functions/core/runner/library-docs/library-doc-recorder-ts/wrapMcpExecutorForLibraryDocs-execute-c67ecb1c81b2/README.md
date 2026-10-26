# `wrapMcpExecutorForLibraryDocs/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/library-docs/library-doc-recorder.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/library-doc-recorder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:574141-574163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574141-L574163) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574141-574163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574141-L574163) | 1 | 0 | 1 | 1 | 0 | 1 |

### evaluation:574141

Chamadas escritas diretamente neste corpo: `deps.resolveDisplayName`, `errorLogTag`, `extractMcpDocTouches`, `inner.execute`, `mcpArgsJson`, `process.stderr.write`, `recordLibraryDocTouches`.

SHA-256 do trecho: `5b7784af7c6b108277749cbd67728a84ce14fd3add92af8a96f78f2227107a18`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
