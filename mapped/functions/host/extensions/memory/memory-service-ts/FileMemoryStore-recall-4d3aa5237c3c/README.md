# `FileMemoryStore.recall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `host/extensions/memory/memory-service.ts` · [README do módulo](../../../../../../modules/host/extensions/memory/memory-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702927-702931](../../../../../../../reference/runtime/host-main.cjs#L702927-L702931) | `method` | não | `recentLimit` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702927-702931](../../../../../../../reference/runtime/host-main.cjs#L702927-L702931) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702927

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`, `this.profileFacts`, `this.recallLogFacts`.

SHA-256 do trecho: `3ea6b83a631d2bafdc49a851b64a932b7cad1ef151f75269bf0a2609a598db1d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
