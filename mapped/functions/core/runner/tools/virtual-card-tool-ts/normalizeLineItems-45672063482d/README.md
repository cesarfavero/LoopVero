# `normalizeLineItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/virtual-card-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775319-775332](../../../../../../../reference/runtime/host-main.cjs#L775319-L775332) | `FunctionDeclaration` | não | `items, amountCents` |
| [evaluation:574964-574977](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574964-L574977) | `FunctionDeclaration` | não | `items, amountCents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775319-775332](../../../../../../../reference/runtime/host-main.cjs#L775319-L775332) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:574964-574977](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574964-L574977) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:775319

Chamadas escritas diretamente neste corpo: `items.map`, `items.reduce`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `739730eff258f73f5959374c3858bd3f96e9bdf839e33c74df2b0a4392d70703`.

### evaluation:574964

Chamadas escritas diretamente neste corpo: `items.map`, `items.reduce`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `739730eff258f73f5959374c3858bd3f96e9bdf839e33c74df2b0a4392d70703`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
