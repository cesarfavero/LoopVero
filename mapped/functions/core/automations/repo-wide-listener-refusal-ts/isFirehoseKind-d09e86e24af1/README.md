# `isFirehoseKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/repo-wide-listener-refusal.ts` · [README do módulo](../../../../../modules/core/automations/repo-wide-listener-refusal-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762005-762007](../../../../../../reference/runtime/host-main.cjs#L762005-L762007) | `FunctionDeclaration` | não | `kind` |
| [evaluation:554583-554585](../../../../../../reference/runtime/sand-eval-runner.cjs#L554583-L554585) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762005-762007](../../../../../../reference/runtime/host-main.cjs#L762005-L762007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554583-554585](../../../../../../reference/runtime/sand-eval-runner.cjs#L554583-L554585) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762005

Chamadas escritas diretamente neste corpo: `FIREHOSE_EVENT_KIND_SET.has`.

SHA-256 do trecho: `ad70ae519dce6fce6f7966795525b84c0dc443b7b2859086f5b177e846139971`.

### evaluation:554583

Chamadas escritas diretamente neste corpo: `FIREHOSE_EVENT_KIND_SET.has`.

SHA-256 do trecho: `ad70ae519dce6fce6f7966795525b84c0dc443b7b2859086f5b177e846139971`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
