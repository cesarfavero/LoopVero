# `agentMemoryHasContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `host/extensions/memory/memory-service.ts` · [README do módulo](../../../../../../modules/host/extensions/memory/memory-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702846-702870](../../../../../../../reference/runtime/host-main.cjs#L702846-L702870) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702846-702870](../../../../../../../reference/runtime/host-main.cjs#L702846-L702870) | 2 | 2 | 0 | 2 | 0 | 2 |

### host:702846

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `FACT_LINE.exec`, `getAgentMemoryDir`, `normalizeMemoryContent`, `raw.split`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `logFiles`, `raw`.

SHA-256 do trecho: `c42584e961df45f790581f456074037528b032e5579f5d6b70b632a2b5220573`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
