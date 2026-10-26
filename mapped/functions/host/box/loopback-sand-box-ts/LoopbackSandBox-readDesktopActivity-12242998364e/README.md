# `LoopbackSandBox.readDesktopActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679394-679397](../../../../../../reference/runtime/host-main.cjs#L679394-L679397) | `method` | sim | `ctx, agentId, windowIndexes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679394-679397](../../../../../../reference/runtime/host-main.cjs#L679394-L679397) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:679394

Chamadas escritas diretamente neste corpo: `this.ensureReady`, `this.runReadDesktopActivity`.

SHA-256 do trecho: `174421827fbfbe82155e088a858aa2526238f63dd5fbc108d1390f3a40b8ced1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
