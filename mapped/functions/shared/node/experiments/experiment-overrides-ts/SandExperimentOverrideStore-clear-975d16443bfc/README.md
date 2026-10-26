# `SandExperimentOverrideStore.clear`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/experiment-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/experiment-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552072-552074](../../../../../../../reference/runtime/host-main.cjs#L552072-L552074) | `method` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552072-552074](../../../../../../../reference/runtime/host-main.cjs#L552072-L552074) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:552072

Chamadas escritas diretamente neste corpo: `this.overrides.delete`.

SHA-256 do trecho: `6b01fab51bcc45ad315921e4f9256f66f8fa1646e7dbe5d83f69facbae27ec99`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
