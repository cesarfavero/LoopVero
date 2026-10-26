# `normalizeCurrency`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/virtual-card-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/virtual-card-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775301-775308](../../../../../../../reference/runtime/host-main.cjs#L775301-L775308) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574946-574953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574946-L574953) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775301-775308](../../../../../../../reference/runtime/host-main.cjs#L775301-L775308) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:574946-574953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574946-L574953) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:775301

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `718fd0815ec728445439ad2f1a7c755da736c236d20b24f5e6ed9d92589452fd`.

### evaluation:574946

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `718fd0815ec728445439ad2f1a7c755da736c236d20b24f5e6ed9d92589452fd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
