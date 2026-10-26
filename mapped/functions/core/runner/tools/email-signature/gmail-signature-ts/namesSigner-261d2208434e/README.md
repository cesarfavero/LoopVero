# `namesSigner`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755754-755757](../../../../../../../../reference/runtime/host-main.cjs#L755754-L755757) | `FunctionDeclaration` | não | `block, nameParts` |
| [evaluation:541629-541632](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541629-L541632) | `FunctionDeclaration` | não | `block, nameParts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755754-755757](../../../../../../../../reference/runtime/host-main.cjs#L755754-L755757) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541629-541632](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541629-L541632) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755754

Chamadas escritas diretamente neste corpo: `.toLocaleLowerCase`, `nameParts.some`, `plainText`.

SHA-256 do trecho: `577d94b7ab86c215e886145c04bd842300fabc42be321d6a3e5a8fe9f0f22677`.

### evaluation:541629

Chamadas escritas diretamente neste corpo: `.toLocaleLowerCase`, `nameParts.some`, `plainText`.

SHA-256 do trecho: `577d94b7ab86c215e886145c04bd842300fabc42be321d6a3e5a8fe9f0f22677`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
