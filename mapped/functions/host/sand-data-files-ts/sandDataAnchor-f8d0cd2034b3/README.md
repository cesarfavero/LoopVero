# `sandDataAnchor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454041-454043](../../../../../reference/runtime/host-main.cjs#L454041-L454043) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:627641-627643](../../../../../reference/runtime/sand-eval-runner.cjs#L627641-L627643) | `FunctionDeclaration` | não | `(nenhum)` |
| [state-worker:642-644](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L642-L644) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454041-454043](../../../../../reference/runtime/host-main.cjs#L454041-L454043) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627641-627643](../../../../../reference/runtime/sand-eval-runner.cjs#L627641-L627643) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:642-644](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L642-L644) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454041

Chamadas escritas diretamente neste corpo: `getSandRootDir`.

SHA-256 do trecho: `b1ba2ae5ff812b85ee688e2962e5823de22dfff06d720de1fa32ffa90952ffa5`.

### evaluation:627641

Chamadas escritas diretamente neste corpo: `getSandRootDir`.

SHA-256 do trecho: `efcaed33fac5564131f685e84e228095c87875a8cecfd39daf6201408b508cd5`.

### state-worker:642

Chamadas escritas diretamente neste corpo: `getSandRootDir`.

SHA-256 do trecho: `26c21d97bd60ce227c649f9bae926541e624df65258f2b8521c8f89d2d95705c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
