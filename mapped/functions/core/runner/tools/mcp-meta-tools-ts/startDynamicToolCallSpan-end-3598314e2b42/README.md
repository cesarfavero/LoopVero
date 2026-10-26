# `startDynamicToolCallSpan/end`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761851-761852](../../../../../../../reference/runtime/host-main.cjs#L761851-L761852) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [host:761857-761861](../../../../../../../reference/runtime/host-main.cjs#L761857-L761861) | `ArrowFunctionExpression` | não | `outcome, errorClass` |
| [evaluation:554125-554126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554125-L554126) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:554131-554135](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554131-L554135) | `ArrowFunctionExpression` | não | `outcome, errorClass` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761851-761852](../../../../../../../reference/runtime/host-main.cjs#L761851-L761852) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:761857-761861](../../../../../../../reference/runtime/host-main.cjs#L761857-L761861) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:554125-554126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554125-L554126) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:554131-554135](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554131-L554135) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:761851

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `a4ea409bf05f706f32fb8a264110cd4a92d039cd051d9c20d470e6cb97dc5b24`.

### host:761857

Chamadas escritas diretamente neste corpo: `disposable.span.setAttribute`, `disposable[computed]`.

SHA-256 do trecho: `cd471d1d37f48152fbe4bb40efe99a69c356b5ebe0f102a501dbdc00d7812335`.

### evaluation:554125

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `a4ea409bf05f706f32fb8a264110cd4a92d039cd051d9c20d470e6cb97dc5b24`.

### evaluation:554131

Chamadas escritas diretamente neste corpo: `disposable.span.setAttribute`, `disposable[computed]`.

SHA-256 do trecho: `cd471d1d37f48152fbe4bb40efe99a69c356b5ebe0f102a501dbdc00d7812335`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
