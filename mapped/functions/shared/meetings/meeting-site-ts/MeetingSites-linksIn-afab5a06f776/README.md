# `_MeetingSites.linksIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772471-772476](../../../../../../reference/runtime/host-main.cjs#L772471-L772476) | `method` | não | `text3` |
| [evaluation:571700-571705](../../../../../../reference/runtime/sand-eval-runner.cjs#L571700-L571705) | `method` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772471-772476](../../../../../../reference/runtime/host-main.cjs#L772471-L772476) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571700-571705](../../../../../../reference/runtime/sand-eval-runner.cjs#L571700-L571705) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772471

Chamadas escritas diretamente neste corpo: `Array.from`, `text3.matchAll`.

SHA-256 do trecho: `3dfb9c9cfefe6c2c618f8f772706930af26a077308869dbe65566c5df62f9a37`.

### evaluation:571700

Chamadas escritas diretamente neste corpo: `Array.from`, `text3.matchAll`.

SHA-256 do trecho: `3dfb9c9cfefe6c2c618f8f772706930af26a077308869dbe65566c5df62f9a37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
