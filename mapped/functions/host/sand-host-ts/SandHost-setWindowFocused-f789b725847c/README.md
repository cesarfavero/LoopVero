# `SandHost.setWindowFocused`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786597-786602](../../../../../reference/runtime/host-main.cjs#L786597-L786602) | `method` | não | `isFocused, surface` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786597-786602](../../../../../reference/runtime/host-main.cjs#L786597-L786602) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:786597

Chamadas escritas diretamente neste corpo: `.findLast`, `this.focusReportStreams.delete`, `this.focusReportStreams.set`, `this.transcript.setWindowFocused`.

SHA-256 do trecho: `0b6ee266f3d33db53fff175814888a38853bd3792f2701a3c87eabf17388bb31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
