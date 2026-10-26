# `readInstalledExtensionId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549346-549359](../../../../../../../reference/runtime/host-main.cjs#L549346-L549359) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549346-549359](../../../../../../../reference/runtime/host-main.cjs#L549346-L549359) | 2 | 1 | 1 | 2 | 1 | 1 |

### host:549346

Chamadas escritas diretamente neste corpo: `.trim`, `/^[a-p]{32}$/.test`, `findSystemErrno`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0b036089f8a0cff969a7ad738472a34f172868cc52adc321b92a497c65fe3055`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
