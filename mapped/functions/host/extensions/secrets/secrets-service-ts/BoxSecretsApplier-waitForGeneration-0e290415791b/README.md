# `BoxSecretsApplier.waitForGeneration`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/secrets-service.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709264-709285](../../../../../../../reference/runtime/host-main.cjs#L709264-L709285) | `method` | sim | `generation, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709264-709285](../../../../../../../reference/runtime/host-main.cjs#L709264-L709285) | 1 | 1 | 1 | 0 | 1 | 0 |

### host:709264

Chamadas escritas diretamente neste corpo: `new Promise`.

Alvos de lançamento explícito: `signal.reason`.

SHA-256 do trecho: `e5cdeda1e00366c43a135f9354bb77c56deeafda727b1c3d6b244484003065d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
