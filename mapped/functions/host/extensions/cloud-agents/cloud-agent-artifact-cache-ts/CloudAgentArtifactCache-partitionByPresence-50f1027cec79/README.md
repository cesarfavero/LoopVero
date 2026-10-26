# `CloudAgentArtifactCache.partitionByPresence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-artifact-cache.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-artifact-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538270-538284](../../../../../../../reference/runtime/host-main.cjs#L538270-L538284) | `method` | sim | `planned` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538270-538284](../../../../../../../reference/runtime/host-main.cjs#L538270-L538284) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:538270

Chamadas escritas diretamente neste corpo: `Promise.all`, `missing.push`, `planned.entries`, `planned.map`, `present.push`.

SHA-256 do trecho: `664bfce5f5c74f2baef955fd7dee022597762c642e2d931493d545d17f27e2c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
