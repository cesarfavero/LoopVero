# `segmentsBelow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453522-453530](../../../../../reference/runtime/host-main.cjs#L453522-L453530) | `FunctionDeclaration` | não | `root, dir` |
| [state-worker:456-464](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L456-L464) | `FunctionDeclaration` | não | `root, dir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453522-453530](../../../../../reference/runtime/host-main.cjs#L453522-L453530) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:456-464](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L456-L464) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:453522

Chamadas escritas diretamente neste corpo: `invariant`, `rel.split`, `rel.startsWith`.

SHA-256 do trecho: `f62a91b4c1337c8bbb79f1619549b12712d020ed2af6088336558f99e12c1250`.

### state-worker:456

Chamadas escritas diretamente neste corpo: `invariant`, `rel.split`, `rel.startsWith`.

SHA-256 do trecho: `db2793c002c4af777b5a3573f516f0f4468ce679959251c3a63f7595818a6916`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
