# `removeSandDataFileSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453890-453892](../../../../../reference/runtime/host-main.cjs#L453890-L453892) | `FunctionDeclaration` | não | `path33` |
| [state-worker:543-545](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L543-L545) | `FunctionDeclaration` | não | `path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453890-453892](../../../../../reference/runtime/host-main.cjs#L453890-L453892) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:543-545](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L543-L545) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453890

Chamadas escritas diretamente neste corpo: `removeNoFollowSync`, `sandDataNoFollowRoot`.

SHA-256 do trecho: `9a5315069a93bd9150fcbec9e58df0e455a054245f028e5c17897774a4406e43`.

### state-worker:543

Chamadas escritas diretamente neste corpo: `removeNoFollowSync`, `sandDataNoFollowRoot`.

SHA-256 do trecho: `d741be0c2766ed1981a0ec42d7584aac9acd7219bbc7f8f8aa5ae0cc694ab72a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
