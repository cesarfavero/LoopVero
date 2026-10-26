# `MeetingLinkCopy.labelWithoutQuery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meetings-shared.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-shared-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772706-772711](../../../../../../reference/runtime/host-main.cjs#L772706-L772711) | `method` | não | `url2` |
| [evaluation:571932-571937](../../../../../../reference/runtime/sand-eval-runner.cjs#L571932-L571937) | `method` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772706-772711](../../../../../../reference/runtime/host-main.cjs#L772706-L772711) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571932-571937](../../../../../../reference/runtime/sand-eval-runner.cjs#L571932-L571937) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:772706

Chamadas escritas diretamente neste corpo: `MeetingSites.parse`, `new URL`.

SHA-256 do trecho: `eafcf7810f1ee8278c8888a0399cd0010bcd60381d9fb7803c5b6314a37943a0`.

### evaluation:571932

Chamadas escritas diretamente neste corpo: `MeetingSites.parse`, `new URL`.

SHA-256 do trecho: `946c507b74ff9cc5914e23aad9dcd6a0c342398d74d0d7b4e772cefdee6520d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
