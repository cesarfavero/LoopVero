# `normalizeTitle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/virtual-card-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775309-775318](../../../../../../../reference/runtime/host-main.cjs#L775309-L775318) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574954-574963](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574954-L574963) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775309-775318](../../../../../../../reference/runtime/host-main.cjs#L775309-L775318) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:574954-574963](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574954-L574963) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:775309

Chamadas escritas diretamente neste corpo: `.filter`, `clampLine`, `new SandToolInputError`, `title.split`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `2b386081ca61f715bc3ef05eeae7d2a63c14f340867a57a826696d2763271d99`.

### evaluation:574954

Chamadas escritas diretamente neste corpo: `.filter`, `clampLine`, `new SandToolInputError`, `title.split`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `ea6daed9a44f5952f8de39d8a9fe8a3697638aab8a2e31cc7f0608dfb6ad93e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
