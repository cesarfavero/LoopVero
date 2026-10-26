# `HostBox.getStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/host-box.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680606-680628](../../../../../../../reference/runtime/host-main.cjs#L680606-L680628) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680606-680628](../../../../../../../reference/runtime/host-main.cjs#L680606-L680628) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:680606

Chamadas escritas diretamente neste corpo: `this.forkVncUrls.delete`, `this.inner.runState`, `this.report`, `this.runningStatus`, `this.vncUrls.delete`, `this.vncUrls.get`.

SHA-256 do trecho: `71383965284da7bb6996c1a76dd3d11d7bb22cc0c645025d50f3eb3414120cac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
