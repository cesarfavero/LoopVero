# `invariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/invariant.ts` · [README do módulo](../../../../modules/shared/invariant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:850-853](../../../../../reference/runtime/host-main.cjs#L850-L853) | `FunctionDeclaration` | não | `condition, message` |
| [evaluation:474331-474334](../../../../../reference/runtime/sand-eval-runner.cjs#L474331-L474334) | `FunctionDeclaration` | não | `condition, message` |
| [state-worker:55-58](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L55-L58) | `FunctionDeclaration` | não | `condition, message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:850-853](../../../../../reference/runtime/host-main.cjs#L850-L853) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474331-474334](../../../../../reference/runtime/sand-eval-runner.cjs#L474331-L474334) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:55-58](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L55-L58) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:850

Chamadas escritas diretamente neste corpo: `failInvariant`.

SHA-256 do trecho: `bf05d9dedc2467f0475b1851f16b4acf9464da66e910f9fa5abf5d95cb264046`.

### evaluation:474331

Chamadas escritas diretamente neste corpo: `failInvariant`.

SHA-256 do trecho: `bf05d9dedc2467f0475b1851f16b4acf9464da66e910f9fa5abf5d95cb264046`.

### state-worker:55

Chamadas escritas diretamente neste corpo: `failInvariant`.

SHA-256 do trecho: `bf05d9dedc2467f0475b1851f16b4acf9464da66e910f9fa5abf5d95cb264046`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
