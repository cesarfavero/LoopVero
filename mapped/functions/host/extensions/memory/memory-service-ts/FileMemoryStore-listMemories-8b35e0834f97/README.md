# `FileMemoryStore.listMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `host/extensions/memory/memory-service.ts` · [README do módulo](../../../../../../modules/host/extensions/memory/memory-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702936-702943](../../../../../../../reference/runtime/host-main.cjs#L702936-L702943) | `method` | não | `limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702936-702943](../../../../../../../reference/runtime/host-main.cjs#L702936-L702943) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:702936

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`, `this.logFacts`, `this.profileFacts`.

SHA-256 do trecho: `dcfdfc75d3005a1d10a85732b09e943f47d47114c28c2031817c862009146b8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
