# `sendableDeviceTimeZone`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/locale/timezone.ts` · [README do módulo](../../../../../modules/shared/locale/timezone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709794-709798](../../../../../../reference/runtime/host-main.cjs#L709794-L709798) | `FunctionDeclaration` | não | `timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709794-709798](../../../../../../reference/runtime/host-main.cjs#L709794-L709798) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:709794

Chamadas escritas diretamente neste corpo: `.resolvedOptions`, `isValidIanaTimeZone`, `new Intl.DateTimeFormat`.

SHA-256 do trecho: `72fc5930206e16551952f9838aa444c86229dce42839960ef787603b813c73f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
