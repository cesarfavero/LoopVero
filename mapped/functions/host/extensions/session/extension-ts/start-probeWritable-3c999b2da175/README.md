# `start/probeWritable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/session/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728428-728443](../../../../../../../reference/runtime/host-main.cjs#L728428-L728443) | `ArrowFunctionExpression` | sim | `path33, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728428-728443](../../../../../../../reference/runtime/host-main.cjs#L728428-L728443) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:728428

Chamadas escritas diretamente neste corpo: `abortProbe`, `cancelProbe`, `mediaRootAccessorOf`, `mediaRootProbeContext.withCancel`, `probeDirectoryWritableViaExecDaemon`, `signal.addEventListener`, `signal.removeEventListener`.

SHA-256 do trecho: `44f6920acf137eea90d89ef63793259fd86766692b22fe429749bf23651083b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
