# `_MeetingHosts.siteOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-host.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763182-763190](../../../../../../reference/runtime/host-main.cjs#L763182-L763190) | `method` | não | `hostname4` |
| [evaluation:556147-556155](../../../../../../reference/runtime/sand-eval-runner.cjs#L556147-L556155) | `method` | não | `hostname3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763182-763190](../../../../../../reference/runtime/host-main.cjs#L763182-L763190) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:556147-556155](../../../../../../reference/runtime/sand-eval-runner.cjs#L556147-L556155) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:763182

Chamadas escritas diretamente neste corpo: `host.endsWith`, `hostname4.toLowerCase`.

SHA-256 do trecho: `d163027a96c78ff543b735462ce1d4d28f03bcf35bb375da7e1ff4e183fdf1a4`.

### evaluation:556147

Chamadas escritas diretamente neste corpo: `host.endsWith`, `hostname3.toLowerCase`.

SHA-256 do trecho: `fb6b6819b9d734f16c66c67a95a641c97707602412bd5322794dc5c2c82febcd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
