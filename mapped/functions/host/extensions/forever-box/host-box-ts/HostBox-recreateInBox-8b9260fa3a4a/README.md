# `HostBox.recreateInBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/host-box.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680636-680641](../../../../../../../reference/runtime/host-main.cjs#L680636-L680641) | `method` | sim | `ctx, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680636-680641](../../../../../../../reference/runtime/host-main.cjs#L680636-L680641) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:680636

Chamadas escritas diretamente neste corpo: `new SandBoxCapabilityError2`, `this.inner.recreateInBox`.

Alvos de lançamento explícito: `SandBoxCapabilityError2`.

SHA-256 do trecho: `b736abae5844ba1120c1d0e22d4f59b1c19ddf2466ea824eadeded7689ffad4d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
