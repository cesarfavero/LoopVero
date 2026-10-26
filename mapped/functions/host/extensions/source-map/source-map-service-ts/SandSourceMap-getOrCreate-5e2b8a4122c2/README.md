# `SandSourceMap.getOrCreate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/source-map/source-map-service.ts` · [README do módulo](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454393-454401](../../../../../../../reference/runtime/host-main.cjs#L454393-L454401) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454393-454401](../../../../../../../reference/runtime/host-main.cjs#L454393-L454401) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:454393

Chamadas escritas diretamente neste corpo: `crypto.randomUUID`, `this.load`, `this.save`.

Alvos de atribuição ou incremento: `map4[computed]`.

SHA-256 do trecho: `87ee557ccc9228b98031c558eb40c743a42c56eb475f007f92c3bec7e6487094`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
