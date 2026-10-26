# `timeZoneOrUtc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763927-763935](../../../../../../../../reference/runtime/host-main.cjs#L763927-L763935) | `FunctionDeclaration` | não | `timeZone` |
| [evaluation:557301-557309](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557301-L557309) | `FunctionDeclaration` | não | `timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763927-763935](../../../../../../../../reference/runtime/host-main.cjs#L763927-L763935) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:557301-557309](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557301-L557309) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:763927

Chamadas escritas diretamente neste corpo: `new Intl.DateTimeFormat`.

SHA-256 do trecho: `691b9d7046aad2d5e1d58a75748bd1b8d7d85a653ac19b3eb20bdc29c42549d2`.

### evaluation:557301

Chamadas escritas diretamente neste corpo: `new Intl.DateTimeFormat`.

SHA-256 do trecho: `691b9d7046aad2d5e1d58a75748bd1b8d7d85a653ac19b3eb20bdc29c42549d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
