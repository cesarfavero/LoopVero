# `newNeedsAuthRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779899-779911](../../../../../../../reference/runtime/host-main.cjs#L779899-L779911) | `FunctionDeclaration` | não | `before, after` |
| [evaluation:580144-580156](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580144-L580156) | `FunctionDeclaration` | não | `before, after` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779899-779911](../../../../../../../reference/runtime/host-main.cjs#L779899-L779911) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:580144-580156](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580144-L580156) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:779899

Chamadas escritas diretamente neste corpo: `.map`, `before.map`, `beforeIdentifiers.has`, `connectCardServerId`, `new Map`, `new Set`, `rows.entries`, `rows.set`, `stdioSignInOf`.

SHA-256 do trecho: `c4deacb0df6fb29de1117f8702d41647cdfbb2d3f3f0055abc67a71a58504e64`.

### evaluation:580144

Chamadas escritas diretamente neste corpo: `.map`, `before.map`, `beforeIdentifiers.has`, `connectCardServerId`, `new Map`, `new Set`, `rows.entries`, `rows.set`, `stdioSignInOf`.

SHA-256 do trecho: `c4deacb0df6fb29de1117f8702d41647cdfbb2d3f3f0055abc67a71a58504e64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
