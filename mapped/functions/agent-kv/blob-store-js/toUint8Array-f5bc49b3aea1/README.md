# `toUint8Array`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-store.js` · [README do módulo](../../../../modules/agent-kv/blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:284723-284728](../../../../../reference/runtime/sand-eval-runner.cjs#L284723-L284728) | `FunctionDeclaration` | não | `b2` |
| [state-worker:21729-21734](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21729-L21734) | `FunctionDeclaration` | não | `b` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:284723-284728](../../../../../reference/runtime/sand-eval-runner.cjs#L284723-L284728) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:21729-21734](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21729-L21734) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:284723

Chamadas escritas diretamente neste corpo: `new Uint8Array`.

SHA-256 do trecho: `04da3613b2c56b05d1cbb51435e102266d56e2ca36d2d2cc1fb53ed34cc832de`.

### state-worker:21729

Chamadas escritas diretamente neste corpo: `new Uint8Array`.

SHA-256 do trecho: `cff1c3deec197f9265d333e4ab9beb63fa6ebd9dfac8c65957138f03df6cbf0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
