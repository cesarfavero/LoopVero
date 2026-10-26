# `createIdleDesktopPark/backingOff`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/idle-desktop-park.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680027-680030](../../../../../../../reference/runtime/host-main.cjs#L680027-L680030) | `ArrowFunctionExpression` | não | `key, now` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680027-680030](../../../../../../../reference/runtime/host-main.cjs#L680027-L680030) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680027

Chamadas escritas diretamente neste corpo: `elapsedMs`, `unparked2.get`, `unparkedBackoffMs`.

SHA-256 do trecho: `96b00bf897615cadf0ba4d724df4055b2e551552093a076b5ad164448e61cb25`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
