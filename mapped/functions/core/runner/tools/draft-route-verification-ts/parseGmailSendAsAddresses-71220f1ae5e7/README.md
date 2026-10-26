# `parseGmailSendAsAddresses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735049-735053](../../../../../../../reference/runtime/host-main.cjs#L735049-L735053) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540623-540627](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540623-L540627) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735049-735053](../../../../../../../reference/runtime/host-main.cjs#L735049-L735053) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540623-540627](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540623-L540627) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735049

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `gmailSendAsSchema.safeParse`, `parseDraftConnectorRecord`, `parsed2.data.sendAs.filter`.

SHA-256 do trecho: `c8eb61b6386f98e72eb4b3b9100943897ad916d453776a2368af1e03f5f096aa`.

### evaluation:540623

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `gmailSendAsSchema.safeParse`, `parseDraftConnectorRecord`, `parsed.data.sendAs.filter`.

SHA-256 do trecho: `15c5be9c9981ef5a2822b9a71a56cec0946b13e55964b79cc33b5e4887363b41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
